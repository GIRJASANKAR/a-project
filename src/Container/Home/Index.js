import React, { useState } from 'react';
import { Header, List } from '../Index';
import NoImage from '../../Assets/Images/no-image.png';
const Index = () => {
  const [dimensions, setDimensions] = useState({
    width: 'Select A Image',
    height: 'Select A Image',
    name: 'Select A Image',
    size:'Select A Image',
  });
  const [image, setImage] = useState(NoImage);
  return (
    <div>
      <Header />
      <section className="main-content" style={{ marginTop: '8rem' }}>
        <h2>Name: {dimensions.name}</h2>
        <h2>Width: {dimensions.width}</h2>
        <h2>Height: {dimensions.height}</h2>
        <h2>Size: {dimensions.size}</h2>
        <h2>URL: {dimensions.size==='Select A Image'?"NO-URL":image}</h2>
        <img style={{ marginTop: '8rem' }} src={image} alt="Preview" />
        <input
          type="file"
          multiple={false}
          accept="Image/*"
          onChange={(e) => {
            e.preventDefault();
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0];
              
              const img = new Image();
              let newSource = URL.createObjectURL(file);
              img.src = newSource;
              // as soon as the image has been loaded

              img.onload = function () {
                var width = img.naturalWidth,
                  height = img.naturalHeight;
                setDimensions({
                  width: width + ' px',
                  height: height + ' px',
                  name: file.name,
                  size:file.size/1000+ ' kb',
                });
                // unload it
                window.URL.revokeObjectURL(img.src);

                // check its dimensions

                let newSource = URL.createObjectURL(file);
                setImage(newSource);
              };
            }
          }}
        />
      </section>
    </div>
  );
};

export default Index;
