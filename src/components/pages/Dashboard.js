import MainDashboardArea from '../layout/MainDashboardArea';
import SimpleSidebar from '../layout/SideBar1';
import MainNavigation from '../layout/MainNavigation';
import ModalBox from '../layout/Modal';
import TableModal from '../dashboard/Table';
import ProfileModal from '../dashboard/ProfileModal';
import NewsLetter from '../dashboard/NewsLetter';

import { modalActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';

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
