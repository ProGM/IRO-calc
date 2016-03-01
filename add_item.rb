require './utils.rb'

ITEM_FILE = './js/item.js'

if ARGV.length != 6
  puts 'Usage: add_item.rb [ITEM NAME] [SLOTS] [ITEM DESCRIPTION] [ITEM TYPE] [ITEM CLASS] [SCRIPT]'
  exit 1
end

puts
puts "**********"
puts "EXTRACTING..."
puts "**********"

item_name, item_slots, item_description, item_type, item_class, script = *ARGV

item_type = parse_item_type item_type

text = File.read ITEM_FILE
position = find_item_last_position(text)
puts "* Position to insert:", position
puts "* Text at position:", text[position, 100]
id = find_item_last_id(text, position).to_i
puts "* Next item id:", id

commands = parse_text_script(script)
# puts commands.inspect

parsed_commands = parse_commands(commands)
puts parsed_commands.inspect

parsed_commands_as_string = parsed_commands.reject(&:empty?).flatten.inspect
                            .delete!('"').to_s
                            .delete!(' ').to_s

puts
puts "Aggiungi nel file itemName.js:"
puts ",[#{id + 1},0,0,\"#{item_name}\",\"#{item_description}\",0]"
puts
puts "Aggiungi nel file item.js:"
puts ",[#{id + 1},#{item_type},2115,20,0,#{item_slots},60,10,#{parsed_commands_as_string[1...-1]},bon_NONE] // Glove of Sura"
puts
puts 'Script non interpretati (da fare manualmente):'
unknown_commands = commands.each_with_index.map { |e, i| parsed_commands[i].empty? ? e : nil }.reject(&:nil?).reject(&:empty?)
puts unknown_commands.inspect
# File.open ITEM_FILE, 'w+' do |f|

# end
