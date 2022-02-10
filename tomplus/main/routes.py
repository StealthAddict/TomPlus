from flask import render_template, request, Blueprint
from tomplus.models import Fanart, Post


main = Blueprint('main', __name__)


@main.route("/")
@main.route("/home")
def home():
    fanart = Fanart.query.order_by(Fanart.id)
    return render_template('main/home.html', fanart=fanart)

@main.route("/about")
def about():
    return render_template('main/about.html', title='About')

@main.route("/content")
def content():
    return render_template('main/content.html', title='Content')

@main.route("/announcements")
def announcements():
    page = request.args.get('page', 1, type=int)
    posts = Post.query.order_by(Post.date_posted.desc()).paginate(page=page, per_page=5)
    return render_template('main/announcements.html', posts=posts, title='Announcements')


