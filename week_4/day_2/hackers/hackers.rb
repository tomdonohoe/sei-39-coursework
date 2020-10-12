# hackers
# |
# | --Ned_Awesome
# |     | 
# |     |+---README.md
# |
# | --Cath_Cath
# |     | 
# |     |+---README.md
# |
# | --Sam_Kuo
# |     | 
# |     |+---README.md
# |
require 'fileutils'

hackers = ['ned awesome', 'cath cath', 'sam kuo']


hackers.each do |hacker|
    # path = hacker.split.map(&:capitalize).join('_')
    path = hacker.sub(' ', '_')
    FileUtils.mkdir path
    FileUtils.touch "#{path}/README.md"
end
