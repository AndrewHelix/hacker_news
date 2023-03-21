export const getDate = (num: number) => {
	const date = new Date(num * 1000);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const fullHours = hours < 10 ? '0' + hours : hours;
	const fullMinutes = minutes < 10 ? '0' + minutes : minutes;
	return `${day}-${month}-${year}: ${fullHours}-${fullMinutes}`;
};
