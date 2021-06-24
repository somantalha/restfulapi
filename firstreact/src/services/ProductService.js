import GenericService from "./GenericService";
class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => this.post("products", data);

  deleteProduct = (id) => this.delete("products/" + id);

  updateProduct = (id, data) => this.put("products/" + id, data);

  getProduct = (page = 1, perPage = 8, category) =>
    this.get(
      "products?page=" + page + "&perPage=" + perPage + "&category=" + category
    );

  getSingleProduct = (id) => this.get("products/" + id);
}
let productService = new ProductsService();
export default productService;
