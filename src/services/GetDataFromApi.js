export default class GetDataFromApi {
  getProductList() {
    return fetch('https://front-test-api.herokuapp.com/api/product')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return data.map((product) => {
          return {
            id: product.id,
            brand: product.brand,
            model: product.model,
            price: product.price,
            img: product.imgUrl,
          };
        });
      });
  }

  getProductDetail(id) {
    return fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return [data].map((item) => {
          return {
            brand: item.brand,
            model: item.model,
            price: item.price,
            cpu: item.cpu,
            ram: item.ram,
            os: item.os,
            displayResolution: item.displayResolution,
            battery: item.battery,
            img: item.imgUrl,
            dimentions: item.dimentions,
            weight: item.weight,
            options: item.options,
            primaryCamera: item.primaryCamera,
            secondaryCamera: item.secondaryCmera,
          };
        });
      });
  }
  getProductOptionsColors(id) {
    return fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.options.colors[0].name);
        // console.log(data.options.colors[0]);
        return data.options.colors.map((color) => {
          return {
            code: color.code,
            name: color.name,
          };
        });
      });
  }
  getProductOptionsStorage(id) {
    return fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.options.storages[0].name);
        return data.options.storages.map((storage) => {
          return {
            code: storage.code,
            name: storage.name,
          };
        });
      });
  }
  // getProductName(filter) {
  //   return fetch(`https://front-test-api.herokuapp.com/api/product/?name_like=${filter}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       const result = data.map((product) => {
  //         return {
  //           model: product.model,
  //         };
  //       });
  //       console.log(result);

  //       return result;
  //     });
  // }
}
