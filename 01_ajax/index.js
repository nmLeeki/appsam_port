$(() => {
    const handleAjax = (url) => {
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json', // 'dateType'이 아니라 'dataType'입니다.
            success: (result) => {
                // 'sucess'가 아니라 'success'입니다.
                console.log(url);
                $('#ajax_con').html(result.body);
            },
            error: (result) => {
                console.log(url);
                alert(`${result}가 없습니다.`);
            },
        });
    };
    const randomUrl = () => {
        const random = Math.floor(Math.random() * 100) + 1;
        return 'https://jsonplaceholder.typicode.com/posts/' + random;
    };
    $('#ajax_btn').on('click', function () {
        console.log('asd');
        handleAjax(randomUrl());
    });
});

// $(() => {
//     const handleAxios = (url) => {
//         axios
//             .get(url)
//             .then((error) => {
//                 console.log(error + '이것은 결과이다');
//             })
//             .catch((error) => {
//                 console.log(error + '이것은 결과이다');
//             })
//             .finally((error) => {
//                 console.log(error + '이것은 결과이다');
//             });
//     };
//     const handleAxiosAsycs = async (url) => {
//         try {
//             const result = await axios.get(url);
//             if (result.body !== '성공입니다.') {
//                 throw new Error('에러가 발생했습니다.');
//             }
//         } catch (error) {
//             console.log(error + '이것이 에러입니다.');
//         } finally {
//         }
//     };
// });
