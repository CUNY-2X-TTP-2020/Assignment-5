import re
file = open("color.txt","r")
lines = file.readlines()
hex_list = []
for i in lines:
    current = i.strip("\n")
    if re.match(r"^#[\d*|A-Z*]",current):
        hex_list.append(current)
print(hex_list)