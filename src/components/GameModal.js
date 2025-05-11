import Swal from "sweetalert2";

export const ResponseModal = async (data) => {
  await Swal.fire({
    text: data ? "로그인성공" : "이미 접속중인 아이디입니다",
    icon: data ? "success" : "warning",
    confirmButtonText: "확인",
    position: "center",
  });
};

export const GameModal = async (nickname) => {
  await Swal.fire({
    title:
      nickname != true
        ? `<span style="color: #333;">${nickname}님이 게임스타트!</span>`
        : `<span style="color: #333;">진행중인 방에 입장합니다</span>`,
    text: "잠시 후 시작합니다",
    icon: "info",
    confirmButtonText: false,
    position: "center",
    showConfirmButton: false,
    allowEscapeKey: false,
    timer: 1500,
    timerProgressBar: true,
    allowOutsideClick: false,
  });
};

export const EndModal = async (data) => {
  await Swal.fire({
    text: data.nickname + "님이 " + data.wrong,
    icon: "info",
    confirmButtonText: false,
    position: "center",
    showConfirmButton: false,
    allowEscapeKey: false,
    timer: 1500,
    timerProgressBar: true,
    allowOutsideClick: false,
  });
};
