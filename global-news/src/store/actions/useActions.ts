import { AppDispatch } from '..';
import { getPermissionTree } from '../../api/permission';
import { getUser } from '../../api/user';

export const tokenAction = (token: string | null) => {
  return {
    type: 'user/setToken',
    payload: token,
  };
};

export const loadingAction = (loading: boolean) => {
  return {
    type: 'user/setLoading',
    payload: loading,
  };
};

export const userAction = (id?: number) => {
  if (!id) {
    return {
      type: 'user/setUser',
      payload: {
        id: 0,
        username: '',
        role: { rights: [] },
      },
    };
  }

  return (dispatch: AppDispatch) => {
    dispatch(loadingAction(true));
    // 模拟网络延迟
    setTimeout(() => {
      getUser(id)
        .then((res) => {
          dispatch({
            type: 'user/setUser',
            payload: res,
          });
          dispatch(loadingAction(false));
        })
        .catch(() => {
          dispatch(loadingAction(false));
        });
    }, 1200);
  };
};
export const rightTreeAction = () => {
  return (dispatch: AppDispatch) => {
    getPermissionTree().then((res) => {
      dispatch({
        type: 'user/setRightTree',
        payload: res,
      });
    });
  };
};
