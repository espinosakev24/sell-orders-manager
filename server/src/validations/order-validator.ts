type TWeightRange = {
    min: number,
    max: number
}

class OrderValidator {
  isWeightAvailable(desiredWeights: TWeightRange, orderWeight: number): boolean {
    const { min, max } = desiredWeights;
    return orderWeight >= min && orderWeight <= max ? true: false;
  }
}

export default new OrderValidator();
