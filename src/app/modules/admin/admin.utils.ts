import { IRoleType } from "./admin.interface";
import AdminModel from "./admin.model";

export const findLastAdminId = async (): Promise<string | undefined> => {
  const lastUser = await AdminModel.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastUser?.id;
};

export const generateAdminID = async (role: IRoleType): Promise<string> => {
  let currentId = await findLastAdminId();
  const preText = `rr-${role}-`;
  if (currentId) {
    const regex = /^(.*-)(\d+)$/; // Regular expression to match the desired pattern

    const [, prefix, suffix] = currentId.match(regex);

    currentId = String(parseInt(suffix) + 1);
  } else {
    currentId = "1";
  }
  return preText + String(currentId).padStart(5, "0");
};
