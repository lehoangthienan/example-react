import numeral from 'numeral';

export const formatCurrency = price => {
  if (!price) return 'Free';
  return `${numeral(price).format('0,0')} VND`;
};

export function changeAlias(str) {
  let strTemp = str;
  strTemp = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  strTemp = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  strTemp = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  strTemp = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  strTemp = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  strTemp = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  strTemp = str.replace(/đ/g, 'd');
  strTemp = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  strTemp = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  strTemp = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  strTemp = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  strTemp = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  strTemp = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  strTemp = str.replace(/Đ/g, 'D');
  return strTemp;
}

export function hexToRGB(h) {
  let r = 0;
  let g = 0;
  let b = 0;

  // 3 digits
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;

    // 6 digits
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }

  return { r, g, b };
}

export function getBrightness(h) {
  const rgb = hexToRGB(h);
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

export function isDark(h) {
  if (!h) return false;

  return getBrightness(h) < 128;
}

export const getRandomColor = () => {
  const letters = '789ABCDEF';
  let color = '#';
  // eslint-disable-next-line no-plusplus
  for (let i = 3; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 9)];
  }
  return color;
};

export const returnArr = () => [1, 2, 3, 4];
