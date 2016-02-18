def find_item_last_position(text)
  text.rindex(/,\[[0-9]+,(itm_type_|weapTyp)/)
end

def find_item_last_id(text, position)
  /,\[([0-9]+)/.match(text[position, -1])
end

def find_next_line_position(text, position)
  text[position, -1].index("\n") + 1
end

def parse_text_script(string)
  string.gsub(/[\{\}]/, '').strip!.split(';').map!(&:strip!)
    .map! { |command| command.split(/[\s,]/) if command }
end

COMMANDS_MAPPING = {
  ['bonus', String, Integer] => ['bon']
}

def parse_commands(command_list)
  command_list.map do |command|
    puts command.inspect
  end
end
