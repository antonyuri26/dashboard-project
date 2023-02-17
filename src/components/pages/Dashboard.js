import MainDashboardArea from '../layout/MainDashboardArea';

import SimpleSidebar from '../dashboard/SideBar1';
import MainNavigation from '../layout/MainNavigation';
import { useSelector, useDispatch } from 'react-redux';
import ModalBox from '../dashboard/Modal';
import { modalActions } from '../../store/index';
import TableModal from '../dashboard/Table';
import ProfileModal from '../dashboard/ProfileModal';
import NewsLetter from '../dashboard/NewsLetter';

const Dashboard = () => {
  const isTablesOpen = useSelector(state => state.modal.isOpen);
  const isNewsOpen = useSelector(state => state.modal.isOpenNews);

  const isProfileOpen = useSelector(state => state.modal.isProfileOpen);

  const dispatchMod = useDispatch();

  const closeModalHandler = id => {
    dispatchMod(modalActions.modalHandler('reset'));
  };

  return (
    <>
      <MainNavigation />

      <MainDashboardArea>
        <SimpleSidebar />
        {/* {pageShow} */}
        {isTablesOpen && (
          <ModalBox onClose={() => closeModalHandler('table')}>
            <TableModal />
          </ModalBox>
        )}
        {isNewsOpen && (
          <ModalBox onClose={() => closeModalHandler('newsletter')}>
            <NewsLetter />
          </ModalBox>
        )}
        {isProfileOpen && (
          <ModalBox onClose={() => closeModalHandler('newsletter')}>
            <ProfileModal />
          </ModalBox>
        )}
      </MainDashboardArea>
    </>
  );
};

export default Dashboard;
