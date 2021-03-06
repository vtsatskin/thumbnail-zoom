/**
 * Copyright (c) 2010 Andres Hernandez Monge and 
 * Copyright (c) 2011-2012 David M. Adler
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL COPYRIGHT HOLDERS OR CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

// Note: this file cannot "use strict"; it prevents default preferences
// from taking effect.

// General preferences.
pref("extensions.thumbnailzoomplus.button.installed",   false);
pref("extensions.thumbnailzoomplus.panel.enable",       true);
pref("extensions.thumbnailzoomplus.panel.debug",        false);
pref("extensions.thumbnailzoomplus.panel.wait",         "0.2"); // seconds
pref("extensions.thumbnailzoomplus.panel.partialloadwait", "1.0"); // seconds
pref("extensions.thumbnailzoomplus.panel.hotkeys",      true);
pref("extensions.thumbnailzoomplus.panel.contextmenu",  true);

// Note: pref ...panel.key has been replaced by ...panel.activatekey.  The
// original name is retired to avoid compatibility problems when reverting
// back to 1.6.0.
pref("extensions.thumbnailzoomplus.panel.activatekey",  0); // NONE
pref("extensions.thumbnailzoomplus.panel.keydisplay",   true);
pref("extensions.thumbnailzoomplus.panel.maxkey",       2); // SHIFT
pref("extensions.thumbnailzoomplus.panel.border",       true);
pref("extensions.thumbnailzoomplus.panel.largeimage",   false);
pref("extensions.thumbnailzoomplus.panel.popuponscroll",false);
pref("extensions.thumbnailzoomplus.panel.focuspopup",   true);
pref("extensions.thumbnailzoomplus.panel.showpercent",  true);
pref("extensions.thumbnailzoomplus.panel.caption",      true);
pref("extensions.thumbnailzoomplus.panel.history",      false);                
pref("extensions.thumbnailzoomplus.panel.defaultzoom",  144);
pref("extensions.thumbnailzoomplus.panel.popupsize",    "webpage");
pref("extensions.thumbnailzoomplus.panel.savefilename", "caption");

// Site preferences.
pref("extensions.thumbnailzoomplus.hi5.enable",         true);
pref("extensions.thumbnailzoomplus.imdb.enable",        true);
pref("extensions.thumbnailzoomplus.imgur.enable",       true);
pref("extensions.thumbnailzoomplus.flickr.enable",      true);
pref("extensions.thumbnailzoomplus.amazon.enable",      true);
pref("extensions.thumbnailzoomplus.tagged.enable",      true);
pref("extensions.thumbnailzoomplus.lastfm.enable",      true);
pref("extensions.thumbnailzoomplus.picasa.enable",      true);
pref("extensions.thumbnailzoomplus.google.enable",      true);
pref("extensions.thumbnailzoomplus.googleplus.enable",  true);
pref("extensions.thumbnailzoomplus.gmail.enable",       true);
pref("extensions.thumbnailzoomplus.twitter.enable",     true);
pref("extensions.thumbnailzoomplus.youtube.enable",     true);
pref("extensions.thumbnailzoomplus.twitpic.enable",     true);
pref("extensions.thumbnailzoomplus.myspace.enable",     true);
pref("extensions.thumbnailzoomplus.netflix.enable",     true);
pref("extensions.thumbnailzoomplus.okcupid.enable",     true);
pref("extensions.thumbnailzoomplus.facebook.enable",    true);
pref("extensions.thumbnailzoomplus.linkedin.enable",    true);
pref("extensions.thumbnailzoomplus.dailymile.enable",   true);
pref("extensions.thumbnailzoomplus.wikipedia.enable",   true);
pref("extensions.thumbnailzoomplus.deviantart.enable",  true);
pref("extensions.thumbnailzoomplus.photosight.enable",  true);
pref("extensions.thumbnailzoomplus.fotop.enable",       true);
pref("extensions.thumbnailzoomplus.photobucket.enable", true);
pref("extensions.thumbnailzoomplus.pinterest.enable",   true);
pref("extensions.thumbnailzoomplus.engadget.enable",    true);
pref("extensions.thumbnailzoomplus.others.enable",      true);
pref("extensions.thumbnailzoomplus.thumbnail.enable",   false); // disabled by default since could be annoying.
pref("extensions.thumbnailzoomplus.othersindirect.enable", true);                
