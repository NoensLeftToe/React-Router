import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-slate-300">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://i.ytimg.com/vi/xOGnHvP-mVE/sddefault.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Blending Depth and Mystery: Exploring Eclectic Decor and Dark Academia
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Eclectic Design Decor combines various styles, textures, colors, and eras to create a space that's uniquely personal and layered. It’s all about mixing the old with the new, blending vintage and modern pieces, and incorporating unexpected elements to add depth. With eclectic decor, there are no strict rules; instead, the focus is on expressing individuality through a curated collection of diverse items that complement each other in surprising ways.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Dark Academia is a design style that channels the aesthetic of old libraries, universities, and classic literature. It often features moody color palettes, rich textures like leather and velvet, and vintage decor elements. Dark wood furniture, antique lamps, and bookshelves filled with classic novels help evoke a sense of intellectual mystery and nostalgia, perfect for those who appreciate a scholarly, slightly gothic atmosphere.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}