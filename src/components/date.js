function setDate() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();

    today = `${yyyy}-${mm}-${dd}`;

    return today;
}

export default setDate;