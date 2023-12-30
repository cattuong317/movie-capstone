import { message } from "antd";
import { https } from "../../service/config";
import { SET_INFO } from "../constant/user";
import { TURN_OFF, TURN_ON } from "../constant/spinner";

export let loginAction = (values, onNavigate) => {
  return (dispatch) => {
    dispatch({
      type: TURN_ON,
    });
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        let dataJson = JSON.stringify(res.data.content);
        localStorage.setItem("USER_INFO", dataJson);
        message.success("Login thành công");
        dispatch({ type: TURN_OFF });
        dispatch({
          type: SET_INFO,
          payload: res.data.content,
        });
        onNavigate("/");
      })
      .catch((err) => {
        dispatch({ type: TURN_OFF });
        message.error("Login redux thunk thất bại");
      });
  };
};
