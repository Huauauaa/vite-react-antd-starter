import Mock from 'mockjs';

function sendMock(url, param) {
  return Mock.mock(`http://test.cn${url}`, param);
}

export const me = sendMock('/me', {
  name: '@name',
  'age|1-10': 10,
});

export const text = sendMock('/text', Mock.Random.paragraph(1, 3));
