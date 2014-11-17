var device = function(e, t, n) {
		n = {
			type: "pc"
		};
		var r = function(e) {
				var t = {},
					n = t.os = {},
					r = t.browser = {},
					i = e.match(/WebKit\/([\d.]+)/),
					s = e.match(/(Android)\s+([\d.]+)/),
					o = e.match(/(iPad).*OS\s([\d_]+)/),
					u = !o && e.match(/(iPhone\sOS)\s([\d_]+)/),
					a = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
					f = a && e.match(/TouchPad/),
					l = e.match(/Kindle\/([\d.]+)/),
					c = e.match(/Silk\/([\d._]+)/),
					h = e.match(/(BlackBerry).*Version\/([\d.]+)/),
					p = e.match(/(BB10).*Version\/([\d.]+)/),
					d = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
					v = e.match(/PlayBook/),
					m = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
					g = e.match(/Firefox\/([\d.]+)/),
					y = e.match(/Windows Phone/);
				return r.webkit = !! i, r.webkit && (r.version = i[1]), y && (n.wphone = !0), s && (n.android = !0, n.version = s[2]), u && (n.ios = !0, n.iphone = !0, n.version = u[2].replace(/_/g, ".")), o && (n.ios = !0, n.ipad = !0, n.version = o[2].replace(/_/g, ".")), a && (n.webos = !0, n.version = a[2]), f && (n.touchpad = !0), h && (n.blackberry = !0, n.version = h[2]), p && (n.bb10 = !0, n.version = p[2]), d && (n.rimtabletos = !0, n.version = d[2]), v && (r.playbook = !0), l && (n.kindle = !0, n.version = l[1]), c && (r.silk = !0, r.version = c[1]), !c && n.android && e.match(/Kindle Fire/) && (r.silk = !0), m && (r.chrome = !0, r.version = m[1]), g && (r.firefox = !0, r.version = g[1]), n.tablet = !! (o || v || s && !e.match(/Mobile/) || g && e.match(/Tablet/)), n.phone = !! (!n.tablet && (s || u || a || h || p || m && e.match(/Android/) || m && e.match(/CriOS\/([\d.]+)/) || g && e.match(/Mobile/)) || y), t
			},
			i = r(navigator.userAgent);
		n.config = i, i.os.tablet && (n.type = "pad"), i.os.phone && (n.type = "mobile");
		var s = t.screen.width,
			o = t.screen.height,
			u = t.innerWidth,
			a = t.innerHeight;
		if (i.os.ios || n.type === "pc") n.width = s, n.height = o;
		else {
			var f = s / u,
				l = o / a,
				c = f < l ? f : l;
			n.width = Math.floor(s / c), n.height = Math.floor(o / c)
		}
		return n
	}(document, window);