import json

# add each item as a disctionary to a list

txtf_name = 'tommyvods_IDs.txt'
list1 = []

with open(txtf_name) as txtf:
    for line in txtf:
        description = line.strip()
        list1.append({"ID":description})

out_file = open('tmp.json', 'w')
json.dump(list1, out_file, indent=4,sort_keys=False)
out_file.close()