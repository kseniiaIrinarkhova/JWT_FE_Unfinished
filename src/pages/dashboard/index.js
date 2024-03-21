import { useAuth } from '../../contexts/auth/auth_context'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { logOut } = useAuth();
  const nav = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
      await logOut();
      nav('/')
  };
  return (
    <div>
      <h1>You are logged in so can see this</h1>
      <button onClick={(e)=>{onSubmit(e)}}>LogOut</button>
    </div>
  );
};

export default Dashboard;
