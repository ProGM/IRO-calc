def parse_item_type(type)
  {
    'dagger' => 'weapTyp_DAGGER',
    'sword' => 'weapTyp_SWORD',
    'spear' => 'weapTyp_SPEAR',
    'spear2' => 'weapTyp_SPEARII',
    'axe' => 'weapTyp_AXE',
    'axe2' => 'weapTyp_AXEII',
    'rod' => 'weapTyp_ROD',
    'bow' => 'weapTyp_BOW',
    'katar' => 'weapTyp_KATAR',
    'book' => 'weapTyp_BOOK',
    'knuckle' => 'weapTyp_KNUCKLE',
    'instrument' => 'weapTyp_INSTRUMENT',
    'whip' => 'weapTyp_WHIP',
    'mace' => 'weapTyp_MACE',
    'armor' => 'itm_type_ARMOR',
    'garment' => 'itm_type_GARMENT',
    'accessory' => 'itm_type_ACCESSORY',
    'shoes' => 'itm_type_SHOES',
    'hat' => 'itm_type_HEAD_UPPER',
    'hat_mid' => 'itm_type_HEAD_MIDDLE',
    'hat_low' => 'itm_type_HEAD_LOWER'
  }[type]
end

def find_item_last_position(text)
  text.rindex(/,\[[0-9]+,(itm_type_|weapTyp)/)
end

def find_item_last_id(text, position)
  /,\[([0-9]+)/.match(text[position..-1])[1]
end

def find_next_line_position(text, position)
  text[position, -1].index("\n") + 1
end

def parse_text_script(string)
  string.gsub(/[\{\}]/, '').strip!.split(';').map!(&:strip!)
    .map! { |command| command.to_s.split(/[\s,]/) }
end

require './mapping_database.rb'

def parse_commands(command_list)
  command_list.map do |command|
    parse_matching_patterns(command, COMMANDS_MAPPING)
  end
end

def parse_matching_patterns(command, command_patterns)
  command_patterns.keys.each do |pattern|
    output = check_matching_pattern(command, pattern)
    return parse_matching_pattern output, command_patterns[pattern] if output
  end
  []
end

def check_matching_pattern(command, pattern)
  output = []
  pattern.each_with_index do |element, i|
    if element == command[i]
    elsif element.is_a?(Regexp) && element.match(command[i])
      output << command[i]
    else
      return false
    end
  end
  output
end

def parse_matching_pattern(pattern_result, format)
  format.map do |e|
    if e.respond_to? :call
      e.call(pattern_result)
    elsif e.respond_to? :gsub
      e.gsub(/(\$[0-9]+)/) do |number|
        pattern_result[number[1..-1].to_i - 1]
      end
    else
      e
    end
  end
end
