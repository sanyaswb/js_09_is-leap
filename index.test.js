const isLeap = require('./index');

test('Функция должна вернуть булиновое значение', () => {
	const type = typeof isLeap(2000);

	expect(type).toBe('boolean');
});

test('Тест. year: 2000', () => {
	const res = isLeap(2000);

	expect(res).toBe(true);
});

test('Тест. year: 1732', () => {
	const res = isLeap(1732);

	expect(res).toBe(true);
});

test('Тест. year: 251', () => {
	const res = isLeap(251);

	expect(res).toBe(false);
});

test('Тест. year: 2022', () => {
	const res = isLeap(1900);

	expect(res).toBe(false);
});

test('Тест. year: 2019', () => {
	const res = isLeap(2004);

	expect(res).toBe(true);
});

test('Тест. year: 1939', () => {
	const res = isLeap(1939);

	expect(res).toBe(false);
});