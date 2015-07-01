require 'RMagick'
include Magick

# cat = ImageList.new('job_detail_a.png')
# smallimg = cat.minify
# smallimg.write('small_img.gif')

# Create a 100x100 red image
f = Image.new(100,100) { self.background_color = "red" }
f.write('red.png')
exit
