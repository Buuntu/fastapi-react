import subprocess

subprocess.call(['mv', '.project-gitignore', '.gitignore'])
subprocess.call(['git', 'init'])
subprocess.call(['git', 'add', '--all'])
subprocess.call(['git', 'commit', '-m', 'init project with cookiecutter'])
