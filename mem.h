template<typename T = uintptr_t, typename A>
T& Read(A address) {
	auto addresss = (DWORD64)address;
	if (addresss > 0x40000 && (addresss + sizeof(T)) < 0x7FFFFFFF0000)
		return *(T*)addresss;

	auto n = nullptr;
	return reinterpret_cast<T&>(n);
}
template <typename T>
void Write(uintptr_t address, T data) {
	if (address > 0x40000 && (address + sizeof(T)) < 0x7FFFFFFF0000)
		*(T*)(address) = data;
}
#define read(Addr, Type) Read<Type>((DWORD64)Addr)
#define write(Addr, Data, Type) Write<Type>((DWORD64)Addr, Data);
#define CALLED_BY(func,off) (reinterpret_cast<std::uint64_t>(_ReturnAddress()) > func && reinterpret_cast<std::uint64_t>(_ReturnAddress()) < func + off)

#define OFFSETFIELD(type, name, offset) struct {unsigned char _pad##__COUNTER__[offset]; type name;}