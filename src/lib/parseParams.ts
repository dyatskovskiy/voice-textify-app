interface ParseParamsArgs {
  params: Promise<{ userId: string; transcriptionId: string }>;
}

interface ParseParamsResponse {
  userId: number;
  transcriptionId: number;
}

const parseParams = async ({
  params,
}: ParseParamsArgs): Promise<ParseParamsResponse> => {
  {
    const { userId: userIdString, transcriptionId: transcriptionIdString } =
      await params;

    const userId = parseInt(userIdString, 10);
    const transcriptionId = parseInt(transcriptionIdString, 10);

    return { userId, transcriptionId };
  }
};

export default parseParams;
