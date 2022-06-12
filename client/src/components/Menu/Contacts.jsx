import { useSelector } from "react-redux";
import PhoneNumber from "../../elements/PhoneNumber";
import PhoneNumberRestaurant from "../../elements/PhoneNumberRestaurant";
import Popover from "../../elements/Popover";

const Contacts = () => {
  const phoneNumbers = useSelector((state) => state.menu.phoneNumbers);

  return (
    <Popover
      contentWidth={290}
      chevronPosition={{ left: 206 }}
      content={
        <div>
          {phoneNumbers.map((item) => (
            <PhoneNumberRestaurant
              key={item._id}
              name={item.city}
              number={item.number}
            />
          ))}
        </div>
      }
    >
      <PhoneNumber />
    </Popover>
  );
};

export default Contacts;
