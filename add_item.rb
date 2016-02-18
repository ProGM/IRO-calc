require './utils.rb'

ITEM_FILE = './iW Stat Simulator_files/item.js'

if ARGV.length != 4
  puts 'Usage: add_item.rb [ITEM NAME] [ITEM DESCRIPTION] [ITEM TYPE] [ITEM CLASS] [SCRIPT]'
  exit 1
end

item_name, item_description, item_type, item_class, script = *ARGV

item_type = parse_item_type item_type

text = File.read ITEM_FILE
puts text
position = find_item_last_position(text)
puts position
id = find_item_last_id(text, position).to_i
puts id

commands = parse_text_script(script)
puts commands.inspect

parsed_commands = parse_commands(commands)
puts parsed_commands.inspect

parsed_commands_as_string =  parsed_commands.reject(&:empty?).flatten.inspect.gsub('"', '')

puts "Aggiungi nel file itemName.js:"
puts ",[#{id},0,0,\"#{item_name}\",\"#{description}\",0]"
puts "Aggiungi nel file item.js:"
puts ",[#{id},itm_type_ACCESSORY,2115,20,0,1,60,10,bon_STR,5,bon_SP_MUL,6,bon_HP_MUL,-6,bon_NONE] // Glove of Sura"

# File.open ITEM_FILE, 'w+' do |f|

# end
