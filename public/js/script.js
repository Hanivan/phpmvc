$(function() {

    $('.tombolTambahData').on('click', function() {
        $('#judulModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('#nama').val('');
        $('#nrp').val('');
        $('#email').val('');
        $('#jurusan').val('');
        $('#id').val('');
    });

    $('.tampilModalUbah').on('click', function() {
        
        $('#judulModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost:7203/phpmvc/public/mahasiswa/ubah');

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost:7203/phpmvc/public/mahasiswa/getUbah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });

    });

});