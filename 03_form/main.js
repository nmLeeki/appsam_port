$(() => {
    $('#admin_btn').on('click', function (e) {
        e.preventDefault();
        const id = $('#id_find').val();
        const pw = $('#pw_find').val();
        const name = $('#name_find').val();
        const isAdmin = $('#admin_find').prop('checked');
        if (!id) return alert('아이디를 입력해주세요.');
        if (!pw) return alert('비밀번호를 입력해주세요.');
        if (!name) return alert('이름을 입력해주세요.');
        if (id == 'admin') {
            if (!isAdmin) return alert('관리자 항목을 체크해주세요.');
        } else {
            if (isAdmin) return alert('관리자가 아니면 체크하지 말아주세요.');
        }
        const idReg = /^[a-zA-Z0-9]{5,10}$/;
        if (!idReg.test(id)) return alert('아이디는 5~10자의 영문과 숫자만 허용합니다.');
        const pwReg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[a-zA-Z\d!@#$%^&*()-_+=]{8,15}$/;
        if (!pwReg.test(pw)) return alert('비밀번호는 8~15자의 영문과 숫자이며, 특수문자를 한개 포함해야합니다.');
        const nameReg = /^[가-힣]{2,4}$/;
        if (!nameReg.test(name)) return alert('2~4자의 한글만 허용합니다.');
        alert('모든 유효성검사를 통과했습니다.');
    });
});
