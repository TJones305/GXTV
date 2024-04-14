from flask import Flask, render_template
from werkzeug.exceptions import HTTPException

app=Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html", e=e), 404


@app.errorhandler(403)
def forbidden_page(e):
    return render_template("403.html", e=e), 403


@app.errorhandler(410)
def page_not_exsist(e):
    return render_template("410.html", e=e), 410


@app.errorhandler(Exception)
def handle_exception(e):
    # pass through HTTP errors
    if isinstance(e, HTTPException):
        return e
    # non-HTTP exceptions only
    return render_template("500.html", e=e), 500



if __name__ == "__main__":
    app.run(debug=False)
    