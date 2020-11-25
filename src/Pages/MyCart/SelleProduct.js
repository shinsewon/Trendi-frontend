import react, { Component } from "react";
import "./SellerProduct.scss";
class SellerProduct extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { products, changeQuantity } = this.props;
    let filterSeller = {};
    products.forEach((el) => {
      !filterSeller.hasOwnProperty(el.seller)
        ? (filterSeller[el.seller] = [el])
        : (filterSeller[el.seller] = [...filterSeller[el.seller], el]);
    });

    return (
      <div className="SellerProduct">
        <table>
          <colgroup>
            <col width={500} align="center" />
            <col width={200} />
            <col width={100} />
          </colgroup>
          {Object.keys(filterSeller).map((keyValue) => (
            <>
              <thead>
                <tr>
                  <td className="sellerName">{keyValue}</td>
                  <td className="quantity">수량</td>
                  <td className="price">주문금액</td>
                </tr>
              </thead>
              <tbody>
                {filterSeller[keyValue].map((value, index) => (
                  <tr key={index}>
                    <td className="flexAlign">
                      <input type="checkbox" checked={value.checked} />
                      <img src={value.thumb_image_url} alt="상품이미지" />
                      <div className="productDetail">
                        <div className="productTitle">{value.title}</div>
                        <div className="productOption">
                          {value.color} {value.size}
                        </div>
                      </div>
                    </td>
                    <td className="quantityBtnForm">
                      <input type="button" data-state="-" value="-" onChange={(el) => changeQuantity(el, value)} />
                      <input className="quantityText" value={value.quantity} onChange={(el) => changeQuantity(el, value)} />
                      <input type="button" data-state="+" value="+" onChange={(el) => changeQuantity(el, value)} />
                    </td>
                    <td className="orderFomr">
                      <div className="productPrice">{value.price.toLocaleString()}원</div>
                      <input className="orderButton" type="button" value="바로구매" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          ))}
        </table>
        {!products[0].delivery && <input type="button" className="addHaruDelivery" value="하루배송 상품 추가하기" />}
      </div>
    );
  }
}
export default SellerProduct;
