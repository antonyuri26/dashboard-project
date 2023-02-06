import { Box } from '@chakra-ui/react';
import MainDashboardArea from '../components/layout/MainDashboardArea';
import MainContent from '../components/layout/MainContent';
import SideBar1 from '../components/dashboard/SideBar1';
import MainNavigation from '../components/MainNavigation';
import { useSelector, useDispatch } from 'react-redux';
import ModalBox from '../components/dashboard/Modal';
import { modalActions } from '../store/index';
// import { modalNewsletterAction } from '../store/index';
import TableModal from '../components/dashboard/Table';
import Billing from './Billing';
import Settings from './Settings';
import ProfileModal from '../components/dashboard/ProfileModal';
import NewsLetter from '../components/dashboard/NewsLetter';

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
      <Box px="10">
        <MainNavigation />
      </Box>

      <MainDashboardArea>
        <SideBar1 />
        {pageShow}
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
