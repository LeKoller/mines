import {Dimensions} from 'react-native';

const params = {
  blockSize: 48,
  borderSize: 6,
  fontSize: 24,
  headerRatio: 0.2,
  difficultLevel: 0.24,

  getColumnsAmount() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height;
    const boardHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
