function makeCookie(cookieName, cookieValue, expireDays) {
                        var d = new Date();
                        d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
                        var expires = "expires=" + d.toUTCString();
                        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
                }

function takeCookie(cookieName) {
        var name = cookieName + "=";
        var minceCookie = document.cookie.split(";");
        for (var i = 0; i < minceCookie.length; i++) {
                var c = minceCookie[i];
                while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                }
        }
        return "";
}

function verifyCookie() {
        var user = takeCookie("username");
        if (user != "") {
                alert("Welcome back to eLEPHANTCase, " + user + ". I'm trying to figure out how to work with cookies via JavaScript. Please be patient with me. I'm a slow learner!");
        } else {
                user = prompt("Enter your preferred username!:", "");
                if (user != "" && user != null) {
                        makeCookie("username", user, 2);
                }
        }
}

