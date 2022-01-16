from flask import Blueprint, render_template

misc = Blueprint('misc', __name__)

@misc.route("/discord")
def discord():
    return render_template('misc/discord.html', title="Discord Sign-up")


@misc.route("/nft-collection")
def nft():
    return render_template('misc/nft.html', title="NFT Collection")