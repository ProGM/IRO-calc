require './utils.rb'

ITEM_FILE = './iW Stat Simulator_files/item.js'

if ARGV.length != 4
  puts 'Usage: add_item.rb [ITEM NAME] [ITEM TYPE] [ITEM CLASS] [SCRIPT]'
  exit 1
end

item_name, item_type, item_class, script = *ARGV

text = File.read ITEM_FILE
puts text
position = find_item_last_position(text)
puts position
id = find_item_last_id(text, position).to_i
puts id

commands = parse_text_script(script)

commands = parse_commands(commands)
puts

# File.open ITEM_FILE, 'w+' do |f|

# end

puts ARGV[0]
