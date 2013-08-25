/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-YouTube' : '&#xe000;',
			'icon-YouTube-play' : '&#xe001;',
			'icon-Yandex' : '&#xe002;',
			'icon-Vkontakte' : '&#xe003;',
			'icon-VK' : '&#xe004;',
			'icon-vimeo' : '&#xe005;',
			'icon-twitter' : '&#xe006;',
			'icon-tumblr' : '&#xe007;',
			'icon-Steam' : '&#xe008;',
			'icon-StackOverflow' : '&#xe009;',
			'icon-SoundCloud' : '&#xe00a;',
			'icon-Skype' : '&#xe00b;',
			'icon-Share' : '&#xe00c;',
			'icon-RSS' : '&#xe00d;',
			'icon-Readability' : '&#xe00e;',
			'icon-Read-it-Later' : '&#xe00f;',
			'icon-Pocket' : '&#xe010;',
			'icon-Pinterest' : '&#xe011;',
			'icon-Picasa' : '&#xe012;',
			'icon-Email' : '&#xe013;',
			'icon-Evernote' : '&#xe014;',
			'icon-facebook' : '&#xe015;',
			'icon-flickr' : '&#xe016;',
			'icon-FourSquare' : '&#xe017;',
			'icon-Flattr' : '&#xe018;',
			'icon-GitHub-circle' : '&#xe019;',
			'icon-GitHub-octoface' : '&#xe01a;',
			'icon-google' : '&#xe01b;',
			'icon-HabraHabr' : '&#xe01c;',
			'icon-Instapaper' : '&#xe01d;',
			'icon-Jabber' : '&#xe01e;',
			'icon-lastfm' : '&#xe01f;',
			'icon-LifeJournal' : '&#xe020;',
			'icon-Linked-in' : '&#xe021;',
			'icon-MoiKrug' : '&#xe022;',
			'icon-MySpace' : '&#xe023;',
			'icon-Odnoklassniki' : '&#xe024;',
			'icon-OpenID' : '&#xe025;',
			'icon-DropBox' : '&#xe026;',
			'icon-Blogspot' : '&#xe027;',
			'icon-BitBucket' : '&#xe028;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};