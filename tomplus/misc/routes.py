from flask import Blueprint, render_template

misc = Blueprint('misc', __name__)

@misc.route("/discord")
def discord():
    return render_template('misc/discord.html', title="Discord Sign-up")


@misc.route("/this-isnt-merch")
def merch():
    return render_template('misc/merch.html', title="What's Happening?")