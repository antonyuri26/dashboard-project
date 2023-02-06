import MainDashboardArea from '../layout/MainDashboardArea';
import MainContent from '../layout/MainContent';
import SimpleSidebar from '../dashboard/SideBar1';
import MainNavigation from '../layout/MainNavigation';
import { useSelector, useDispatch } from 'react-redux';
import ModalBox from '../dashboard/Modal';
import { modalActions } from '../../store/index';
import TableModal from '../dashboard/Table';
import Billing from '../pages/Billing';
import Settings from '../pages/Settings';
import ProfileModal from '../dashboard/ProfileModal';
import NewsLetter from '../dashboard/NewsLetter';

const Dashboard = () => {
  const isTablesOpen = useSelector(state => state.modal.isOpen);
  const isNewsOpen = useSelector(state => state.modal.isOpenNews);
  const isBillingOpen = useSelector(state => state.sidnav.isBillingOn);
  const isSettingOpen = useSelector(state => state.sidnav.isSettingOn);
  const isProfileOpen = useSelector(state => state.modal.isProfileOpen);

  const dispatchMod = useDispatch();

  const closeModalHandler = id => {
    dispatchMod(modalActions.modalHandler('reset'));
  };

  let pageShow = '';
  if (isBillingOpen) {
    pageShow = <Billing />;
  }

  if (isSettingOpen) {
    pageShow = <Settings />;
  }

  if (isBillingOpen === false && isSettingOpen === false) {
    pageShow = <MainContent />;
  }

  return (
    <>
      {/* <Flex px="10"> */}
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
      {/* </Flex> */}
    </>
  );
};

export default Dashboard;
