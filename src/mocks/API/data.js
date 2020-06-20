export const fakeItem = [...Array(10).keys()].map(i => ({
  id: i,
  productDisplayId: "01",
  name: `Túi sách ${i}`,
  category: "bag",
  description: `asdasdasdasd ${i}`,
  tagId: "01",
  price: "100000",
  colors: [
    {
      id: "01",
      name: "black",
      colorCode: "#2196F3",
      productId: "00001"
    },
    {
      id: "02",
      name: "white",
      colorCode: "#FFEB3B",
      productId: "00001"
    },
    {
      id: "03",
      name: "red",
      colorCode: "#f21",
      productId: "00001"
    }
  ],
  sizes: [
    {
      id: "01",
      sizeName: "M",
      sizeCode: "001",
      productId: "00001"
    }
  ],
  images: [
    {
      id: `${i}`,
      fileName: "string",
      url:
        "http://product.hstatic.net/1000365849/product/11balocamelia_bfd424d0f91c44cfaf84a404bbd34d35_grande.jpg",
      unc: "string",
      productId: "string"
    },
    {
      id: `${i}`,
      fileName: "string",
      url:
        "http://product.hstatic.net/1000365849/product/11balocamelia_bfd424d0f91c44cfaf84a404bbd34d35_grande.jpg",
      unc: "string",
      productId: "string"
    },
    {
      id: `${i}`,
      fileName: "string",
      url:
        "http://product.hstatic.net/1000365849/product/11balocamelia_bfd424d0f91c44cfaf84a404bbd34d35_grande.jpg",
      unc: "string",
      productId: "string"
    }
  ],
  orderId: "string"
}));
