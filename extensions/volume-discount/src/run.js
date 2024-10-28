import { DiscountApplicationStrategy } from "../generated/api";

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

const EMPTY_DISCOUNT = {
  discountApplicationStrategy: DiscountApplicationStrategy.Maximum,
  discounts: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */

export function run(input) {
  const metaData = JSON.parse(input?.discountNode?.metafield?.value ?? "{}");
  const volumeDiscounts = metaData?.volume_discounts ?? [];
  const applicableTags = metaData?.product_tags ?? [];

  const discountApplications = [];

  input.cart.lines.forEach((line) => {
    if (line.merchandise.__typename === "ProductVariant") {
      const product = line.merchandise.product;
      const isApplicableProduct = product.hasTags.some(tagObj =>
        applicableTags.includes(tagObj.tag) && tagObj.hasTag
      );

      if (isApplicableProduct) {
        const quantity = line.quantity;

        // Find the applicable discount tier based on the quantity
        const applicableDiscount = volumeDiscounts
          .filter(tier => quantity >= tier.quantity)
          .sort((a, b) => b.quantity - a.quantity)[0];

        if (applicableDiscount) {
          discountApplications.push({
            message: applicableDiscount.message,
            targets: [{ cartLine: { id: line.id } }],
            value: {
              percentage: {
                value: applicableDiscount.discount,
              },
            },
          });
        }
      }
    }
  });

  if (discountApplications.length === 0) {
    return EMPTY_DISCOUNT;
  }

  return {
    discountApplicationStrategy: DiscountApplicationStrategy.All, 
    discounts: discountApplications,
  };
}
























