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
  console.error('userAction')
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
    // 模拟网络延迟
    setTimeout(() => {
      getUser(id)
        .then((res) => {
          dispatch({
            type: 'user/setUser',
            payload: res,
          });
        })
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
