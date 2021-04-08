function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
}

$(document).ready(function () {
    semuaData();
    dataAsean();

    setInterval(function () {
        semuaData();
        dataAsean();
    }, 3000)

    function semuaData() {
        $.ajax({
            url: 'https://covid19.mathdro.id/api',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;
                    var update = data.lastUpdate;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');
                    update = convertTZ(update, 'Asia/Makassar');

                    $('#data-kasus').html(kasus);
                    $('#data-mati').html(meninggal);
                    $('#data-sembuh').html(sembuh);
                    $('#lastUpdated').html(update);
                } catch {
                    alert('Error');
                }
            }
        })
    }

    function dataAsean() {
        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/indonesia',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-ind').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/brunei',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-brn').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/philippines',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-fil').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/malaysia',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-mal').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/thailand',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-thai').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/cambodia',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-kam').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/burma',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-myan').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/laos',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-laos').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/vietnam',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-viet').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/singapore',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-sing').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })

        $.ajax({
            url: 'https://covid19.mathdro.id/api/countries/timor-leste',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.confirmed.value;
                    var meninggal = data.deaths.value;
                    var sembuh = data.recovered.value;

                    kasus = Number(kasus).toLocaleString('id');
                    meninggal = Number(meninggal).toLocaleString('id');
                    sembuh = Number(sembuh).toLocaleString('id');

                    $('#data-timor').html(
                        '<br>Positif : ' + kasus + ' orang <br> Meninggal : ' + meninggal + ' orang <br> Sembuh : ' + sembuh + ' orang'
                    )
                } catch {
                    alert('Error');
                }
            }
        })
    }
});