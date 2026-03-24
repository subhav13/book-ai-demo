import glob
for f in glob.glob("app/**/*.tsx", recursive=True):
    with open(f, 'r') as file:
        data = file.read()
    data = data.replace("/ />", " />")
    with open(f, 'w') as file:
        file.write(data)
