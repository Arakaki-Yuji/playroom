require 'RMagick'
include Magick

cat = ImageList.new('logo.jpeg')
width = 640
height = 438

logo = cat.resize_to_fit(width, height)

image_out = Magick::Image.new(width, height)
image_out.background_color = '#ffffff'
image_out.composite!(logo, Magick::CenterGravity, Magick::OverCompositeOp)
image_out.write('image_out.jpeg')

# create a 100x100 red image
# f = Image.new(100,100) { self.background_color = "red" }
# f.write('red.png')
exit
