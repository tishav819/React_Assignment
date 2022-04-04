const timeStampformatter = (timeStamp) => {
    const dateObj = new Date(timeStamp);
    return `${dateObj.getHours()}:${dateObj.getMinutes()} (${dateObj.getDate()}-${dateObj.getMonth()}-${dateObj.getFullYear()})`;
};

export {timeStampformatter};
