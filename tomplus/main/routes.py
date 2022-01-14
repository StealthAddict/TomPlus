from flask import render_template, request, Blueprint
from tomplus.models import Post


main = Blueprint('main', __name__)


@main.route("/")
@main.route("/home")
def home():
    page = request.args.get('page', 1, type=int)
    posts = Post.query.order_by(Post.date_posted.desc()).paginate(page=page, per_page=5)
    return render_template('main/home.html', posts=posts)

@main.route("/about")
def about():
    return render_template('main/about.html', title='About')

@main.route("/content")
def content():
    return render_template('main/content.html', title='Content')

@main.route("/announcements")
def announcements():
    return render_template('main/announcements.html', title='Announcements')

