""" GDB Python customization auto-loader for js shell """

import os.path
sys.path[0:0] = [os.path.join('/build/wine-mozilla-2.24/js/src', 'gdb')]

import mozilla.autoload
mozilla.autoload.register(gdb.current_objfile())